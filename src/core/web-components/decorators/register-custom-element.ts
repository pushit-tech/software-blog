/* 
This was pulled AND MODIFIED from the URL below as
LitElements does not prevent the same element from
being registered more than once causing errors.
https://github.com/lit/lit-element/blob/master/src/lib/decorators.ts
*/

export type Constructor<T> = {
  new (...args: any[]): T;
};

// From the TC39 Decorators proposal
interface ClassElement {
  kind: "field" | "method";
  key: PropertyKey;
  placement: "static" | "prototype" | "own";
  initializer?: () => void;
  extras?: ClassElement[];
  finisher?: <T>(clazz: Constructor<T>) => undefined | Constructor<T>;
  descriptor?: PropertyDescriptor;
}

// From the TC39 Decorators proposal
interface ClassDescriptor {
  kind: "class";
  elements: ClassElement[];
  finisher?: <T>(clazz: Constructor<T>) => undefined | Constructor<T>;
}

const legacyCustomElement = (
  tagName: string,
  clazz: Constructor<HTMLElement>
) => {
  if (!customElements.get(tagName)) {
    window.customElements.define(tagName, clazz);
  }
  // Cast as any because TS doesn't recognize the return type as being a
  // subtype of the decorated class when clazz is typed as
  // `Constructor<HTMLElement>` for some reason.
  // `Constructor<HTMLElement>` is helpful to make sure the decorator is
  // applied to elements however.
  // tslint:disable-next-line:no-any
  return clazz as any;
};

const standardCustomElement = (
  tagName: string,
  descriptor: ClassDescriptor
) => {
  const { kind, elements } = descriptor;
  return {
    kind,
    elements,
    // This callback is called once the class is otherwise fully defined
    finisher(clazz: Constructor<HTMLElement>) {
      if (!customElements.get(tagName)) {
        window.customElements.define(tagName, clazz);
      }
    },
  };
};

/**
 * Class decorator factory that defines the decorated class as a custom element.
 *
 * ```
 * @registerCustomElement('my-element')
 * class MyElement {
 *   render() {
 *     return html``;
 *   }
 * }
 * ```
 * @category Decorator
 * @param tagName The name of the custom element to define.
 */
export const registerCustomElement =
  (tagName: string) =>
  (classOrDescriptor: Constructor<HTMLElement> | ClassDescriptor) =>
    typeof classOrDescriptor === "function"
      ? legacyCustomElement(tagName, classOrDescriptor)
      : standardCustomElement(tagName, classOrDescriptor);
