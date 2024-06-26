import { YooptaBlockData, SlateElement } from '../../editor/types';
import { generateId } from '../../utils/generateId';

export const buildBlockElement = (element?: Partial<SlateElement>): SlateElement => {
  return {
    id: generateId(),
    type: element?.type || 'paragraph',
    children: element?.children || [{ text: '' }],
    props: {
      nodeType: 'block',
      ...element?.props,
    },
  };
};

export const buildBlockData = (block?: Partial<YooptaBlockData>): YooptaBlockData => ({
  id: block?.id || generateId(),
  value: block?.value || [buildBlockElement()],
  type: block?.type || 'Paragraph',
  meta: {
    order: 0,
    depth: 0,
    ...block?.meta,
  },
});

export const getDefaultYooptaChildren = () => {
  const pId = generateId();

  return {
    [pId]: buildBlockData({ id: pId }),
  };
};
