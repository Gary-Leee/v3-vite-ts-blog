//删除打包后代码中的console

export const removeConsole: Function = () => {
  return {
    name: 'remove-console',
    transform(code: string, id: string) {
      // return {};
      if (id.endsWith('.js') || id.endsWith('.ts') || id.endsWith('.vue')) {
        return code.replace(/console\.log\(([^)]+)\)[,;]/g, '');
      }
      return code;
    }
  };
};
