import chalk, { Chalk } from 'chalk';

export enum LogLevel {
  INFO = 'green',
  WARN = 'yellow',
  ERROR = 'red',
  DEBUG = 'blue',
}

let _tags: string[] = [];

const _log = (msg: string[], logLevel?: LogLevel) =>
  console.log(
    chalk[logLevel ? logLevel : 'white'](
      _tags.map((t) => `[${t}]`),
      msg.join(' '),
    ),
  );

export const logger = {
  setTags: (tags: string[]) => (_tags = tags),
  addTags: (tags: string) =>
    typeof tags === 'string' ? _tags.push(tags) : _tags.concat(tags),
  log: (...msg: string[]) => _log(msg),
  info: (...msg: string[]) => _log(msg, LogLevel.INFO),
  warn: (...msg: string[]) => _log(msg, LogLevel.WARN),
  error: (...msg: string[]) => _log(msg, LogLevel.ERROR),
  debug: (...msg: string[]) => _log(msg, LogLevel.DEBUG),
};
export default logger;
