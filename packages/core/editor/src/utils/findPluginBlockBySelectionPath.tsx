import { YooEditor, YooptaEditorTransformOptions } from '../editor/types';

export function findPluginBlockBySelectionPath(
  editor: YooEditor,
  options: Pick<YooptaEditorTransformOptions, 'at'> = {},
) {
  const childrenKeys = Object.keys(editor.children);
  const { at = editor.selection } = options;

  const blockId = childrenKeys.find((childrenId) => {
    const plugin = editor.children[childrenId];
    return plugin.meta.order === at?.[0];
  });

  if (!blockId) return null;
  return editor.children[blockId];
}
