import { readingTime, mapPost } from "../post";
import { Post } from "contentlayer/generated";

describe("readingTime", () => {
  it("returns the correct reading time for a given text", () => {
    const text =
      "This is a sample text with more than 200 words. It should take more than a minute to read.";
    const expectedReadingTime = 1;
    const actualReadingTime = readingTime(text);
    expect(actualReadingTime).toEqual(expectedReadingTime);
  });

  it("should map a Post object to a MyPost object", () => {
    const post: Post = {
      title: "Arquitectura Micro-frontends (MFE)",
      date: "2023-10-09T00:00:00.000Z",
      description:
        "Entendamos la necesidad y el valor que nos da una arquitectura como Microfrontends antes de entrar en su adopcion.",
      body: {
        raw: "This is a sample text with more than 200 words. It should take more than a minute to read.",
        html: "<p><This is a sample text with more than 200 words. It should take more than a minute to read./p>",
      },
      _id: "mfe-architecture/es.md",
      _raw: {
        sourceFilePath: "mfe-architecture/es.md",
        sourceFileName: "es.md",
        sourceFileDir: "mfe-architecture",
        contentType: "markdown",
        flattenedPath: "mfe-architecture/es",
      },
      type: "Post",
      url: "/posts/mfe-architecture",
    };

    const expected = {
      id: "mfe-architecture/es.md",
      title: "Arquitectura Micro-frontends (MFE)",
      description:
        "Entendamos la necesidad y el valor que nos da una arquitectura como Microfrontends antes de entrar en su adopcion.",
      date: "October 8, 2023",
      body: {
        html: "<p><This is a sample text with more than 200 words. It should take more than a minute to read./p>",
        raw: "This is a sample text with more than 200 words. It should take more than a minute to read.",
      },
      url: "/posts/mfe-architecture",
      readTime: 1,
    };

    const result = mapPost(post);

    expect(result).toEqual(expected);
  });
});
