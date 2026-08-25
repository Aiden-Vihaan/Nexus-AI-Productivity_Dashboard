export type LogLevel =
  | "debug"
  | "info"
  | "warn"
  | "error";

export interface LogEntry {
  level: LogLevel;

  message: string;

  timestamp: string;

  requestId?: string;

  metadata?: Record<
    string,
    unknown
  >;
}

export class Logger {
  constructor(
    private readonly minimumLevel:
      LogLevel = "info"
  ) {}

  private shouldLog(
    level: LogLevel
  ): boolean {
    const order: Record<
      LogLevel,
      number
    > = {
      debug: 0,
      info: 1,
      warn: 2,
      error: 3
    };

    return (
      order[level] >=
      order[this.minimumLevel]
    );
  }

  log(
    level: LogLevel,
    message: string,
    metadata?: Record<
      string,
      unknown
    >
  ): LogEntry {
    const entry: LogEntry = {
      level,

      message,

      timestamp:
        new Date().toISOString(),

      metadata
    };

    if (
      this.shouldLog(level)
    ) {
      console.log(
        JSON.stringify(entry)
      );
    }

    return entry;
  }

  debug(
    message: string,
    metadata?: Record<
      string,
      unknown
    >
  ) {
    return this.log(
      "debug",
      message,
      metadata
    );
  }

  info(
    message: string,
    metadata?: Record<
      string,
      unknown
    >
  ) {
    return this.log(
      "info",
      message,
      metadata
    );
  }

  warn(
    message: string,
    metadata?: Record<
      string,
      unknown
    >
  ) {
    return this.log(
      "warn",
      message,
      metadata
    );
  }

  error(
    message: string,
    metadata?: Record<
      string,
      unknown
    >
  ) {
    return this.log(
      "error",
      message,
      metadata
    );
  }
}
