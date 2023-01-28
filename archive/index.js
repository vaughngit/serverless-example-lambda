function handler(event) {
    console.log("Job Stared" )
    console.log("event:", event )

    return {
        body: JSON.stringify({message: 'SUCCESS'}),
        statusCode: 200,
    };
}
module.exports = {handler};