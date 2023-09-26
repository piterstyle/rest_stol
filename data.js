var APP_DATA = {
  "scenes": [
    {
      "id": "0-q1",
      "name": "q1",
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
      "faceSize": 1000,
      "initialViewParameters": {
        "yaw": 1.7000159361287297,
        "pitch": 0.026222430052325052,
        "fov": 1.3762036036846816
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "1-q2",
      "name": "q2",
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
      "faceSize": 1000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.437398833907352,
          "pitch": 0.007340399536822417,
          "rotation": 0,
          "target": "0-q1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-q3",
      "name": "q3",
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
      "faceSize": 1000,
      "initialViewParameters": {
        "yaw": -1.8428070678027826,
        "pitch": 0.04172776214154794,
        "fov": 1.545414226112777
      },
      "linkHotspots": [
        {
          "yaw": -1.8428070678027826,
          "pitch": 0.04172776214154794,
          "rotation": 0,
          "target": "1-q2"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "qtvr",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
