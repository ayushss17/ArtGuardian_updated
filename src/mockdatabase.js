const mockDatabase = {
  arts: [
    {
      id:1,
      artist:'John Constable',
      title:"The Hay Wain",
      bigtitle:"The painting depicts a rural scene in the Stour Valley in Suffolk, Eng…",
      price:2,
      type:"Landscape",
      Link1:"https://i.imgur.com/s6Wjk5z.jpg",
      paintAddress: '0x1F89071f1dDcfE14A41e789294eEA8b18Fe98779'
    },
    {
      id:2,
      artist:'Casper David Fridrich',
      title:"The Monk",
      bigtitle:"The contrast between the vastness of nature and the humanity.",
      price:10,
      type:"Landscape",
      Link1:"https://i.imgur.com/Dw6Yjjn.jpg",
      paintAddress: '0x1F89071f1dDcfE14A41e789294eEA8b18Fe98779'
    },
    {
      id:3,
      artist:'Claude Monet',
      title:"Impression, Sunrise",
      bigtitle:" The painting depicts a sunrise over the harbor, with the sun's rays reflecting on the water and the sailboats in the foreground. ",
      price:3,
      type:"Landscape",
      Link1:"https://i.imgur.com/HJWlvST.jpg",
      paintAddress: '0x1F89071f1dDcfE14A41e789294eEA8b18Fe98779'
    },
    {
      id:4,
      artist:'Martin Johnson Heade',
      title:"Sunlight and Shadow ",
      bigtitle:"The painting showcases a serene landscape through lush green meadows, with a picturesque village nestled in the distance. ",
      price:3,
      type:"Landscape",
      Link1:"https://i.imgur.com/3TfU2UI.jpg",
      paintAddress: '0x1F89071f1dDcfE14A41e789294eEA8b18Fe98779'
    },
    {
      id:5,
      artist:'Thomas Cole',
      title:"The Oxbow",
      bigtitle:" The painting portrays a tranquil scene of the Connecticut River Valley, with a winding river, lush forests, and distant mountains.",
      price:3,
      type:"Landscape",
      Link1:"https://i.imgur.com/XpPaHmo.jpg",
      paintAddress: '0x1F89071f1dDcfE14A41e789294eEA8b18Fe98779'
    },
    {
      id:6,
      artist:'Vincent Van Gogh',
      title:"The Starry Night",
      bigtitle:" It depicts the view from the east-facing window of his asylum room at Saint-Paul-de-Mausole in Saint-Rémy-de-Provence.",
      price:5,
      type:"Landscape",
      Link1:"https://i.imgur.com/fOKM7Ub.jpg",
      paintAddress: '0x1F89071f1dDcfE14A41e789294eEA8b18Fe98779'
    },
    {
      id:7,
      artist:'Vincent van Gogh',
      title:"Self Portrait With Straw Hat",
      bigtitle:"This particular painting holds significant importance in the realm of art.",
      price:5,
      type:"Portrait",
      Link1:"https://i.imgur.com/bVfmlDO.jpg",
      paintAddress: '0x5254a3b9f715bc2116276f648509fdfd0cb7c408'
    },
    {
      id:8,
      artist:'Jan van Eyc',
      title:"Arnolfini Portrait",
      bigtitle:"A portrait of a married couple that alludes also to the husband's grant of legal authority to his wife.",
      price:5,
      type:"Portrait",
      Link1:"https://i.imgur.com/bwqfjTL.jpg",
      paintAddress: '0x5254a3b9f715bc2116276f648509fdfd0cb7c408'
    },
    {
      id:9,
      artist:'Leonardo da Vinci',
      title:"Mona Lisa ",
      bigtitle:"A half-length oil painting that is considered a masterpiece of the Italian Renaissance.",
      price:100,
      type:"Portrait",
      Link1:"https://i.imgur.com/IMi8GAy.jpg",
      paintAddress: '0x5254a3b9f715bc2116276f648509fdfd0cb7c408'
    },
    {
      id:10,
      artist:'Johannes Vermeer',
      title:"Girl With Pearl Earing",
      bigtitle:"It depicts a young woman wearing a pearl earring which is one of the most famous works of art in the world.",
      price:30,
      type:"Portrait",
      Link1:"https://i.imgur.com/4AlWIcc.jpg",
      paintAddress: '0x5254a3b9f715bc2116276f648509fdfd0cb7c408'
    },
    {
      id:11,
      artist:'Grant Wood',
      title:"American Gothic",
      bigtitle:"It depicts a farmer and his daughter standing in front of a Gothic-style farmhouse.",
      price:20,
      type:"Portrait",
      Link1:"https://i.imgur.com/2xxQABn.jpg",
      paintAddress: '0x5254a3b9f715bc2116276f648509fdfd0cb7c408'
    },
    {
      id:12,
      artist:'Bindo Altivito',
      title:"Portrait of Bindo Altivito ",
      bigtitle:"Bindo Altoviti was an Italian Renaissance banker and art patron.",
      price:15,
      type:"Portrait",
      Link1:"https://i.imgur.com/ZGOBfNm.jpg",
      paintAddress: '0x5254a3b9f715bc2116276f648509fdfd0cb7c408'
    },
    {
      id:13,
      artist:'Antoine Vollon ',
      title:"Mound of Butter",
      bigtitle:"It depicts,a mound of creamy yellow butter on a wooden table with an olive-green background.",
      price:20,
      type:"StillLifePainting",
      Link1:"https://i.imgur.com/8jtako4.jpg",
      paintAddress: '0x1F89071f1dDcfE14A41e789294eEA8b18Fe98779'
    },
    {
      id:14,
      artist:'Édouard Manet ',
      title:"Asparagus",
      bigtitle:"The focus of this painting lies in capturing the delicate textures, vibrant colors, and intricate details of the aspargus.",
      price:10,
      type:"StillLifePainting",
      Link1:"https://i.imgur.com/ffXFTYQ.jpg",
      paintAddress: '0x1F89071f1dDcfE14A41e789294eEA8b18Fe98779'
    },
    {
      id:15,
      artist:'Salvador Dalí',
      title:"Living Still Life",
      bigtitle:"An oil on canvas painting created in 1956 during a period known as “Nuclear Mysticism”.",
      price:20,
      type:"StillLifePainting",
      Link1:"https://i.imgur.com/NWQjeRQ.jpg",
      paintAddress: '0x5254a3b9f715bc2116276f648509fdfd0cb7c408'
    },
    {
      id:16,
      artist:'Paul Cézanne',
      title:"The Basket of Apples",
      bigtitle:"A basket of apples pitches forward from a slablike base, seemingly balanced by the bottle and the tablecloth's thick.",
      price:30,
      type:"StillLifePainting",
      Link1:"https://i.imgur.com/w16mEYx.jpg",
      paintAddress: '0x5254a3b9f715bc2116276f648509fdfd0cb7c408'
    },
    {
      id:17,
      artist:'Hokusa',
      title:"The Great Wave off Kanagawa",
      bigtitle:"It depicts three boats navigating a stormy sea, with a large wave spiraling and visible Mount Fuji.",
      price:100,
      type:"History Painting",
      Link1:"https://i.imgur.com/oJKgqCs.jpg",
      paintAddress: '0x1F89071f1dDcfE14A41e789294eEA8b18Fe98779'
    },
    {
      id:18,
      artist:'Rembrandt',
      title:"The Night Watch",
      bigtitle:"It depicts the captain of the guard as he leads his yellow-clad lieutenant.",
      price:50,
      type:"History Painting",
      Link1:"https://i.imgur.com/FolwykY.jpg",
      paintAddress: '0x1F89071f1dDcfE14A41e789294eEA8b18Fe98779'
    },
    {
      id:19,
      artist:'Edward Hopper',
      title:"Nighthawks",
      bigtitle:"It is an oil-canvas that portrays four people in downtown dinner late at night.",
      price:70,
      type:"History Painting",
      Link1:"https://i.imgur.com/kmGn6CM.jpg",
      paintAddress: '0x1F89071f1dDcfE14A41e789294eEA8b18Fe98779'
    },
    {
      id:20,
      artist:'Georges Seurat',
      title:"A Sunday Afternoon",
      bigtitle:"A leading example of pointillist technique,is founding work of the neo-impressionist movement.",
      price:80,
      type:"History Painting",
      Link1:"https://i.imgur.com/2r7myVy.jpg",
      paintAddress: '0x1F89071f1dDcfE14A41e789294eEA8b18Fe98779'
    },
   ],
  wallets: [
    {
      publicAddress: '0xD63397814D82F0580b09276AcCC110781913d939',
    },
    {
      publicAddress: '0x1F89071f1dDcfE14A41e789294eEA8b18Fe98779',
    },
    {
      publicAddress: '0x5254A3B9F715Bc2116276f648509FdfD0cB7C408',
    },
    
  ],
};

module.exports = mockDatabase;