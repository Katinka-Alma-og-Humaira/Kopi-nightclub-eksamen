import { cacheLife } from "next/cache";

async function getComments(eventId) {
  "use cache";
  cacheLife("hours");

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/comments?eventId=${eventId}`, { next: { tags: ["comments"] } });
  return await response.json();
}

const Comments = async ({ eventId }) => {
  const comments = await getComments(eventId);

  return (
    <div className="min-[800px]:max-w-6xl min-[1000px]:mx-auto mt-(--space-l)">
      <h1 className="mb-(--space-s)">{comments.length} Comments</h1>

      {comments.length === 0 ? (
        <p>No comments yet. Be the first to comment!</p>
      ) : (
        comments.map((comment) => (
          <div key={comment.id}>
            <h3>
              <span>{comment.name} - </span>
              <span className="text-(--color-pink) text-h4">
                Posted{" "}
                {new Date(comment.date)
                  .toLocaleDateString("en-EN", {
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                  })
                  .replace(/\b\w/, (c) => c.toUpperCase())}
              </span>
            </h3>
            <p className="text-base!">{comment.content}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default Comments;
