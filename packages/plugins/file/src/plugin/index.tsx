import { YooptaPlugin } from '@yoopta/editor';
import { FileElementProps, FilePluginElements, FilePluginOptions } from '../types';
import { FileRender } from '../ui/File';

const File = new YooptaPlugin<FilePluginElements, FileElementProps, FilePluginOptions>({
  type: 'File',
  elements: {
    file: {
      render: FileRender,
      props: {
        size: 0,
        name: null,
        src: null,
        format: null,
        nodeType: 'void',
      },
    },
  },
  options: {
    display: {
      title: 'File',
      description: 'For file videos, google maps and more',
    },
    accept: '',
    // onUpload: async () => Promise.resolve({ src: '' }),
  },
  parsers: {
    // html: {
    //   deserialize: {
    //     nodeNames: ['A'],
    //     parse: (el) => {
    //       if (el.nodeName === 'A') {
    //         const url = new URL(el.getAttribute('src') || '');
    //         return {
    //           id: generateId(),
    //           type: 'file',
    //           children: [{ text: '' }],
    //           props: {
    //             provider: {
    //               id: url.href,
    //               type: url.hostname,
    //               url: url.href,
    //             },
    //             sizes: {
    //               width: el.getAttribute('width') ? parseInt(el.getAttribute('width') || '650', 10) : 650,
    //               height: el.getAttribute('height') ? parseInt(el.getAttribute('height') || '400', 10) : 400,
    //             },
    //           },
    //         };
    //       }
    //     },
    //   },
    // },
  },
});

export { File };
