const { GeneralError } = require('../utils/errors');

const handleErrors = async (err, req, res, next) => {
  let code = 500;
  if (err instanceof GeneralError) {
    code = err.getCode();
  }

  if (err.extractedErrors?.length > 0) {
    return res.status(code).json({
      correlationId,
      errors: err.extractedErrors,
    });
  }

  return res.status(code).json({
    errors: [{ [err.type || 'message']: err.message }],
  });
};

module.exports = { handleErrors };
