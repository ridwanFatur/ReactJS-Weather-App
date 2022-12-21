export class NetworkResult<T> {
  data?: T;
  message?: string;

  constructor({ data, message }: { data?: T; message?: string }) {
    this.data = data;
    this.message = message;
  }
}

export class ResultHasData<T> extends NetworkResult<T> {
  constructor(data: T) {
    super({
      data: data,
      message: undefined,
    });
  }
}

export class ResultError<T> extends NetworkResult<T> {
  constructor(message: string) {
    super({
      data: undefined,
      message: message,
    });
  }
}

export class ResultLoading<T> extends NetworkResult<T> {
  constructor() {
    super({
      data: undefined,
      message: undefined,
    });
  }
}

export class ResultEmpty<T> extends NetworkResult<T> {
  constructor() {
    super({
      data: undefined,
      message: undefined,
    });
  }
}
