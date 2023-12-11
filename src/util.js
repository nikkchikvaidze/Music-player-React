import { v4 as uuidv4 } from 'uuid';

const getMusic = () => {
  return [
    {
      name: 'Lost Memories',
      cover:
        'https://assets-global.website-files.com/5fc4bca9bd65e8f2bf87f576/6567215adc2e3d05782d52a9_C%2011.webp',
      artist: 'Ruck P, ØDYSSEE',
      audio: 'https://stream.chillhop.com/mp3/65377',
      color: ['#7BAABE', '#EBEBF7'],
      id: uuidv4(),
      active: true,
    },
    {
      name: 'Winter Shore',
      cover:
        'https://chillhop.com/wp-content/uploads/2023/10/0a2c6003af19a23e13b38661569898344d7590a1-1024x1024.jpg',
      artist: 'Leavv',
      audio: 'https://stream.chillhop.com/mp3/65383',
      color: ['#F7E9E0', '#C6CBDF'],
      id: uuidv4(),
      active: false,
    },
    {
      name: 'Stay',
      cover:
        'https://chillhop.com/wp-content/uploads/2023/10/4945cd7e50ca1777035c994140f6aaa70e6df5fb-1024x1024.jpg',
      artist: 'Yasper',
      audio: 'https://stream.chillhop.com/mp3/65411',
      color: ['#739C1E', '#E67600'],
      id: uuidv4(),
      active: false,
    },
    {
      name: 'Let Go',
      cover:
        'https://chillhop.com/wp-content/uploads/2023/09/7c0628588f526e9948f21027903e146430db4b82-1024x1024.jpg',
      artist: 'A D M B, Boukas',
      audio: 'https://stream.chillhop.com/mp3/65379',
      color: ['#300F1E', '#7B6356'],
      id: uuidv4(),
      active: false,
    },
  ];
};

export default getMusic;
