import { useEffect } from "react";

export function Component2({ result, attribute }) {
  useEffect(() => {
    const promise = fetch(
      `http://jsonplaceholder.typicode.com/posts/${result}/${attribute}`,
      {
        method: "GET",
        headers: {
          "content-type": {
            "Content-type": "application/json; charset=UTF-8",
          },
        },
      }
    );

    const responseresult = (response) => {
      if (response.status == 200 || response.status == 201) {
        return response.json();
      } else {
        throw new Error("some problem in API");
      }
    };
    promise
      .then(responseresult)
      .then((json) => {
        console.log(json);
      })
      .catch((e) => {
        console.log(e.message);
      });

    return () => {
      console.log(12132);
    };
  }, [result]);

  return <p>(column2......printed value({result}))</p>;
}
