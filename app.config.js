// app.config.js
import 'dotenv/config';

export default {
  expo: {
    name: "WNMap",
    slug: "wannyanmap",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/icon.png",
    userInterfaceStyle: "light",
    splash: {
      image: "./assets/splash.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff"
    },
    ios: {
      supportsTablet: true,
      config: {
        googleMaps: {
          apiKey: "", // 環境変数を使用
        }
      }
    },
    android: {
      config: {
        googleMaps: {
          apiKey: "", // 環境変数を使用
        }
      },
      package: "com.example.wnmap",
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#ffffff"
      },
    },
    web: {
      favicon: "./assets/favicon.png"
    },
    extra: {
      eas: {
        projectId: "f10c2dc9-a21e-4b51-b4cc-b413fba4f8d1"
      },
      GOOGLE_PLACES_API_KEY:"",
    },
    cli: {
      appVersionSource: "remote" // または "local" を選択
    }
  }
};
