export default lambdaFunc => {
  return (event, context, callback) => {
    if (event.source === 'aws.events') {
      return callback(null, 'pinged');
    }

    return lambdaFunc(event, context, callback);
  };
};
