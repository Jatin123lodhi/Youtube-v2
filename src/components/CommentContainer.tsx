interface IComment {
    id: number;
    name: string;
    message: string;
    comment: IComment[];
}

const Comment = (props: IComment) => {
  const { name,id,message,comment } = props;
  return (
    <div className="m-2 p-2 flex ">
      <img
        className="rounded-full w-12 h-12"
        alt="img"
        src="./warikoPic.jpg"
      />
      <div>
        <div className="font-bold mx-2">Warikoo {name}</div>
        <div className="mx-2 ">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis
          minus unde, obcaecati assumenda iusto incidunt quis facere! Nostrum,
          atque molestias.
          {message}
        </div>
        <div className="mt-2">
          {comment.map((nestedComment) => (
            <Comment {...nestedComment} key={id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export const CommentContainer = () => {
  const comments:IComment[] = [
    {
      id: 1,
      name: "Jatin",
      message: "I love react",
      comment: [
        {
          id: 2,
          name: "Wariko",
          message: "This is epic ",
          comment: [
            {
              id: 3,
              name: "Jatin",
              message: "I love react",
              comment: [
                {
                  id: 4,
                  name: "Wariko",
                  message: "This is epic ",
                  comment: [
                    {
                      id: 5,
                      name: "Jatin",
                      message: "I love react",
                      comment: [
                        {
                          id: 6,
                          name: "Wariko",
                          message: "This is epic ",
                          comment: [],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 7,
      name: "Jatin",
      message: "I love react",
      comment: [
        { id: 8, name: "Wariko", message: "This is epic ", comment: [] },
      ],
    },
    {
      id: 9,
      name: "Jatin",
      message: "I love react",
      comment: [
        { id: 10, name: "Wariko", message: "This is epic ", comment: [] },
      ],
    },
  ];

  return (
    <div className="my-2 p-2 bg-gray-200 w-full">
      <div className="m-2 p-2 text-xl">Comments</div>
      {comments.map((comment) => {
        //console.log(comment.id)
        return <Comment {...comment} key={comment.id} />;
      })}
      {/* <Comment commentData={commentObj[0]} /> */}
    </div>
  );
};
