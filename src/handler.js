'use strict';

const hello = async (event) => {
  console.log("Job Stared" )
  console.log("event:", event )

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Function executed successfully!',
        input: event,
      },
      null,
      2
    ),
  };
};

module.exports = {hello};
