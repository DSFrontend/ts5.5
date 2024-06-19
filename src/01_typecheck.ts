const isString = (x: unknown) => typeof x === "string";

const isObjectWithId = (x: unknown) =>
  typeof x === "object" && x !== null && "id" in x;

const isObjectWithIdString = (x: unknown) =>
  typeof x === "object" && x !== null && "id" in x && typeof x.id === "string";

const isNotEmpty = (x: unknown) => x !== null && x !== undefined;

const isNonNullish = <T>(x: T) => x != null;

const items = [1, 2, 3, undefined, null].filter(
  (item) => typeof item === "number"
);

const f1 = (obj: Record<string, unknown>, key: string) => {
  if (typeof obj[key] === "string") {
    obj[key].toUpperCase();
  }
};
