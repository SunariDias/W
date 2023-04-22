import logger from "../Logstash";

describe("logstash", () => {
  const log = jest.spyOn(global.console, "log");
  const mockFunc = jest.fn();

  it("logger Debug succeeds", () => {
    // eslint-disable-next-line testing-library/no-debugging-utils
    logger.debug({ message: "test", mockFunc, details: "whatever" });
    expect(log).toHaveBeenCalledTimes(1);
  });

  it("logger Info succeeds", () => {
    logger.info({ message: "test", mockFunc, details: "whatever" });
    expect(log).toHaveBeenCalledTimes(1);
  });
  it("logger Warn succeeds", () => {
    logger.warn({ message: "test", mockFunc, details: "whatever" });
    expect(log).toHaveBeenCalledTimes(1);
  });

  it("logger Error succeeds", () => {
    logger.error({ message: "test", mockFunc, details: "whatever" });
    expect(log).toHaveBeenCalledTimes(1);
  });
});
