import { createYooptaPlugin } from '@yoopta/editor';
import s from './HeadingTwo.module.scss';

const HeadingTwoRender = ({ attributes, children, element }) => {
  return (
    <h2 id={element.id} draggable={false} className={s['heading-two']} {...attributes}>
      {children}
    </h2>
  );
};

HeadingTwoRender.displayName = 'HeadingTwo';

const HeadingTwo = createYooptaPlugin({
  type: 'HeadingTwo',
  elements: {
    'heading-two': {
      render: HeadingTwoRender,
      options: {
        nodeType: 'block',
      },
    },
  },
});

export { HeadingTwo };
