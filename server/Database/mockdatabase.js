const mockDatabase = {
    arts: [
      {
        id:'65b5eca5925a7f4fbedb2658',
        artist:'John Constable',
        title:"The Hay Wain",
        bigtitle:"The painting depicts a rural scene in the Stour Valley in Suffolk, Eng…",
        price:2,
        type:"Landscape",
        Link1:"https://i.imgur.com/s6Wjk5z.jpg",
        artistAddress: '0x1F89071f1dDcfE14A41e789294eEA8b18Fe98779'
      },
      {
        id:'65b5f017beaf9a766171d629',
        artist:'Casper David Fridrich',
        title:"The Monk",
        bigtitle:"The contrast between the vastness of nature and the humanity.",
        price:10,
        type:"Landscape",
        Link1:"https://i.imgur.com/Dw6Yjjn.jpg",
        artistAddress: '0x1F89071f1dDcfE14A41e789294eEA8b18Fe98779'
      },
      {
        id:'65b5f0e017e2221ed6679115',
        artist:'Claude Monet',
        title:"Impression, Sunrise",
        bigtitle:" The painting depicts a sunrise over the harbor, with the sun's rays reflecting on the water and the sailboats in the foreground. ",
        price:3,
        type:"Landscape",
        Link1:"https://i.imgur.com/HJWlvST.jpg",
        artistAddress: '0x1F89071f1dDcfE14A41e789294eEA8b18Fe98779'
      },
      {
        id:'65b5f25e70eedfb80e724d95',
        artist:'Martin Johnson Heade',
        title:"Sunlight and Shadow ",
        bigtitle:"The painting showcases a serene landscape through lush green meadows, with a picturesque village nestled in the distance. ",
        price:3,
        type:"Landscape",
        Link1:"https://i.imgur.com/3TfU2UI.jpg",
        artistAddress: '0x1F89071f1dDcfE14A41e789294eEA8b18Fe98779'
      },
      {
        id:'65b5f3991d25fc842d92eb0f',
        artist:'Thomas Cole',
        title:"The Oxbow",
        bigtitle:" The painting portrays a tranquil scene of the Connecticut River Valley, with a winding river, lush forests, and distant mountains.",
        price:3,
        type:"Landscape",
        Link1:"https://i.imgur.com/XpPaHmo.jpg",
        artistAddress: '0x1F89071f1dDcfE14A41e789294eEA8b18Fe98779'
      },
      {
        id:'65b5f4324cbc601d052566be',
        artist:'Vincent Van Gogh',
        title:"The Starry Night",
        bigtitle:" It depicts the view from the east-facing window of his asylum room at Saint-Paul-de-Mausole in Saint-Rémy-de-Provence.",
        price:5,
        type:"Landscape",
        Link1:"https://i.imgur.com/fOKM7Ub.jpg",
        artistAddress: '0x1F89071f1dDcfE14A41e789294eEA8b18Fe98779'
      },
      {
        id:'65bf99939c52ca74863bd4f0',
        artist:'Vincent van Gogh',
        title:"Self Portrait With Straw Hat",
        bigtitle:"This particular painting holds significant importance in the realm of art.",
        price:5,
        type:"Portrait",
        Link1:"https://i.imgur.com/bVfmlDO.jpg",
        artistAddress: '0x5254a3b9f715bc2116276f648509fdfd0cb7c408'
      },
      {
        id:'65e33b8030c6df1b1fd5356c',
        artist:'Jan van Eyc',
        title:"Arnolfini Portrait",
        bigtitle:"A portrait of a married couple that alludes also to the husband's grant of legal authority to his wife.",
        price:5,
        type:"Portrait",
        Link1:"https://i.imgur.com/bwqfjTL.jpg",
        artistAddress: '0x5254a3b9f715bc2116276f648509fdfd0cb7c408'
      },
      {
        id:'65e33be530c6df1b1fd5356e',
        artist:'Leonardo da Vinci',
        title:"Mona Lisa ",
        bigtitle:"A half-length oil painting that is considered a masterpiece of the Italian Renaissance.",
        price:100,
        type:"Portrait",
        Link1:"https://i.imgur.com/IMi8GAy.jpg",
        artistAddress: '0x5254a3b9f715bc2116276f648509fdfd0cb7c408'
      },
      {
        id:'65e33c7530c6df1b1fd53572',
        artist:'Johannes Vermeer',
        title:"Girl With Pearl Earing",
        bigtitle:"It depicts a young woman wearing a pearl earring which is one of the most famous works of art in the world.",
        price:30,
        type:"Portrait",
        Link1:"https://i.imgur.com/4AlWIcc.jpg",
        artistAddress: '0x5254a3b9f715bc2116276f648509fdfd0cb7c408'
      },
      {
        id:'65e33ced30c6df1b1fd53574',
        artist:'Grant Wood',
        title:"American Gothic",
        bigtitle:"It depicts a farmer and his daughter standing in front of a Gothic-style farmhouse.",
        price:20,
        type:"Portrait",
        Link1:"https://i.imgur.com/2xxQABn.jpg",
        artistAddress: '0x5254a3b9f715bc2116276f648509fdfd0cb7c408'
      },
      {
        id:'65e33d5330c6df1b1fd53576',
        artist:'Bindo Altivito',
        title:"Portrait of Bindo Altivito ",
        bigtitle:"Bindo Altoviti was an Italian Renaissance banker and art patron.",
        price:15,
        type:"Portrait",
        Link1:"https://i.imgur.com/ZGOBfNm.jpg",
        artistAddress: '0x5254a3b9f715bc2116276f648509fdfd0cb7c408'
      },
      {
        id:'65e3402c3624b82f4595b938',
        artist:'Antoine Vollon ',
        title:"Mound of Butter",
        bigtitle:"It depicts,a mound of creamy yellow butter on a wooden table with an olive-green background.",
        price:20,
        type:"StillLifePainting",
        Link1:"https://i.imgur.com/8jtako4.jpg",
        artistAddress: '0x1F89071f1dDcfE14A41e789294eEA8b18Fe98779'
      },
      {
        id:'65e3411c3624b82f4595b93a',
        artist:'Édouard Manet ',
        title:"Asparagus",
        bigtitle:"The focus of this painting lies in capturing the delicate textures, vibrant colors, and intricate details of the aspargus.",
        price:10,
        type:"StillLifePainting",
        Link1:"https://i.imgur.com/ffXFTYQ.jpg",
        artistAddress: '0x1F89071f1dDcfE14A41e789294eEA8b18Fe98779'
      },
      {
        id:'65e34505eecdc06dbf48d3f7',
        artist:'Salvador Dalí',
        title:"Living Still Life",
        bigtitle:"An oil on canvas painting created in 1956 during a period known as “Nuclear Mysticism”.",
        price:20,
        type:"StillLifePainting",
        Link1:"https://i.imgur.com/NWQjeRQ.jpg",
        artistAddress: '0x5254a3b9f715bc2116276f648509fdfd0cb7c408'
      },
      {
        id:'65e3454deecdc06dbf48d3f9',
        artist:'Paul Cézanne',
        title:"The Basket of Apples",
        bigtitle:"A basket of apples pitches forward from a slablike base, seemingly balanced by the bottle and the tablecloth's thick.",
        price:30,
        type:"StillLifePainting",
        Link1:"https://i.imgur.com/w16mEYx.jpg",
        artistAddress: '0x5254a3b9f715bc2116276f648509fdfd0cb7c408'
      },
      {
        id:'65e345d7eecdc06dbf48d3fe',
        artist:'Hokusa',
        title:"The Great Wave off Kanagawa",
        bigtitle:"It depicts three boats navigating a stormy sea, with a large wave spiraling and visible Mount Fuji.",
        price:100,
        type:"History Painting",
        Link1:"https://i.imgur.com/oJKgqCs.jpg",
        artistAddress: '0x1F89071f1dDcfE14A41e789294eEA8b18Fe98779'
      },
      {
        id:'65e34612eecdc06dbf48d400',
        artist:'Rembrandt',
        title:"The Night Watch",
        bigtitle:"It depicts the captain of the guard as he leads his yellow-clad lieutenant.",
        price:50,
        type:"History Painting",
        Link1:"https://i.imgur.com/FolwykY.jpg",
        artistAddress: '0x1F89071f1dDcfE14A41e789294eEA8b18Fe98779'
      },
      {
        id:'65e3463aeecdc06dbf48d402',
        artist:'Edward Hopper',
        title:"Nighthawks",
        bigtitle:"It is an oil-canvas that portrays four people in downtown dinner late at night.",
        price:70,
        type:"History Painting",
        Link1:"https://i.imgur.com/kmGn6CM.jpg",
        artistAddress: '0x1F89071f1dDcfE14A41e789294eEA8b18Fe98779'
      },
      {
        id:'65e345d7eec65e34668eecdc06dbf48d404dc06dbf48d3fe',
        artist:'Georges Seurat',
        title:"A Sunday Afternoon",
        bigtitle:"A leading example of pointillist technique,is founding work of the neo-impressionist movement.",
        price:80,
        type:"History Painting",
        Link1:"https://i.imgur.com/2r7myVy.jpg",
        artistAddress: '0x1F89071f1dDcfE14A41e789294eEA8b18Fe98779'
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
  
  export default mockDatabase
  