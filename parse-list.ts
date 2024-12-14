const parseList = async (filename: string): Promise<string[]> => {
  return await Deno.readTextFile(filename).then(function (result: string) {
    const list: string[] = [];

    result.split(/\n/g).forEach((line: string) => {
      list.push(line.trim());
    });

    return list;
  });
};

export { parseList };
