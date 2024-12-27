/* eslint-disable @typescript-eslint/no-explicit-any */

import TerrorSources, { TGenericResponseError } from '../interface/error';

const DuplicateIDErrorHandler = (err: any): TGenericResponseError => {
  // Extract value within double quotes using regex
  const match = err.message.match(/"([^"]*)"/);

  // The extracted value will be in the first capturing group
  const extractedMessage = match && match[1];
  const errorSources: TerrorSources = [
    {
      path: '',
      message: `${extractedMessage} is not a already existing`,
    },
  ];

  const statusCode = 400;
  return {
    statusCode,
    success: false,
    message: 'Already exists',
    errorSources,
  };
};

export default DuplicateIDErrorHandler;
