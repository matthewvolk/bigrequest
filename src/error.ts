class BigRequestError extends Error {
  constructor(message: string) {
    super(message);

    this.name = 'BigRequestError';
  }
}

export { BigRequestError };
