var APP_DATA = {
  "scenes": [
    {
      "id": "0-osnovnaya_zona_2",
      "name": "osnovnaya_zona_2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.3483631496828963,
          "pitch": 0.2744980574507139,
          "rotation": 0,
          "target": "1-osnovnaya_zona_1"
        },
        {
          "yaw": -0.2604197886042847,
          "pitch": 0.0728246884766186,
          "rotation": 6.283185307179586,
          "target": "2-vhod"
        },
        {
          "yaw": 0.0355141573358182,
          "pitch": 0.08853461197648116,
          "rotation": 0,
          "target": "3-vine_bar"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-osnovnaya_zona_1",
      "name": "osnovnaya_zona_1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.055457497477657824,
          "pitch": 0.1539728144529171,
          "rotation": 0,
          "target": "0-osnovnaya_zona_2"
        },
        {
          "yaw": -3.0706696630430077,
          "pitch": 0.20647229637262576,
          "rotation": 0,
          "target": "2-vhod"
        },
        {
          "yaw": -2.483695918165642,
          "pitch": 0.1596570442581733,
          "rotation": 0,
          "target": "3-vine_bar"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-vhod",
      "name": "vhod",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.9482237888506795,
          "pitch": 0.276966295569828,
          "rotation": 0,
          "target": "1-osnovnaya_zona_1"
        },
        {
          "yaw": 0.840799120907409,
          "pitch": 0.08293589992915429,
          "rotation": 0,
          "target": "0-osnovnaya_zona_2"
        },
        {
          "yaw": -0.43269020747995235,
          "pitch": 0.3745494381235037,
          "rotation": 0,
          "target": "3-vine_bar"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-vine_bar",
      "name": "vine_bar",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0.699063886574308,
        "pitch": 0,
        "fov": 1.4185322104917357
      },
      "linkHotspots": [
        {
          "yaw": 1.7941001916636017,
          "pitch": 0.3852083722402515,
          "rotation": 0,
          "target": "2-vhod"
        },
        {
          "yaw": 0.5216024590904134,
          "pitch": 0.23074593953940692,
          "rotation": 0,
          "target": "1-osnovnaya_zona_1"
        },
        {
          "yaw": -0.08550933120235982,
          "pitch": 0.08952364482922626,
          "rotation": 0,
          "target": "0-osnovnaya_zona_2"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
