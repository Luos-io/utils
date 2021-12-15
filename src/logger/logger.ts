import chalk from 'chalk';

export enum LogLevel {
  INFO = 'green',
  WARN = 'yellow',
  ERROR = 'red',
  DEBUG = 'blue',
}

export class Logger {
  private _tags: string[] = [];
  private _log(msg: string[], logLevel?: LogLevel) {
    console.log(
      chalk[logLevel ? logLevel : 'white'](
        this._tags.map((t) => `[${t}]`),
        msg.join(' '),
      ),
    );
  }

  public constructor(_tags: string[] = []) {
    this._tags = _tags;
  }

  public setTags(tags: string[]) {
    this._tags = tags;
  }

  public addTags(tags: string) {
    if (typeof tags === 'string') {
      this._tags.push(tags);
    } else {
      this._tags.concat(tags);
    }
  }

  public log(...msg: string[]) {
    this._log(msg);
  }

  public info(...msg: string[]) {
    this._log(msg, LogLevel.INFO);
  }

  public warn(...msg: string[]) {
    this._log(msg, LogLevel.WARN);
  }

  public error(...msg: string[]) {
    this._log(msg, LogLevel.ERROR);
  }

  public debug(...msg: string[]) {
    this._log(msg, LogLevel.DEBUG);
  }

  public get tags() {
    return this._tags;
  }

  public set tags(tags: string[]) {
    this._tags = tags;
  }
}
export default Logger;
