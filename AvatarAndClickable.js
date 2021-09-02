import React, { Component } from "react";
import { View, Alert, Text } from "react-native";

import Leaderboard from "./LeaderBoard";

export default class AvatarAndClickable extends Component {
  state = {
    data: DATA
  };

  componentDidMount() {
    // simulate new users being added to leaderboard
    setInterval(() => {
      const newData = {
        name: "New User Data!!",
        score: ((Math.random() * 4) + 1).toFixed(1),
        dropRate:((Math.random() * 20) + 1).toFixed(1),
        acceptance:Math.floor((Math.random() * 99) + 1),
        iconUrl:
          "https://www.shareicon.net/data/128x128/2016/09/15/829473_man_512x512.png"
      };
      this.setState({ data: this.state.data.concat(newData) });
    }, 3000);
  }

  alert = (title, body) => {
    Alert.alert(title, body, [{ text: "OK", onPress: () => {} }], {
      cancelable: false
    });
  };

  render() {
    const props = {
      labelBy: "name",
      sortBy: "score",
      data: this.state.data,
      icon: "iconUrl",
      onRowPress: (item, index) => {
        this.alert(item.name + "\n ", item.dropRate + "% droprate \n"+ item.acceptance + "% Acceptance");
      },
      evenRowColor: "#edfcf9"
    };

    return (
      <View style={{ flex: 1 }}>
        {/* Ghetto Header */}
        <View
          style={{
            paddingTop: 50,
            backgroundColor: "dodgerblue",
            alignItems: "center"
          }}
        >
          <Text style={{ fontSize: 30, color: "white", paddingBottom: 10 }}>
            Zone
            Leaderboard
          </Text>
        </View>
        <Leaderboard {...props} />
      </View>
    );
  }
}

const DATA = [
  {
    name: "We Tu Lo",
    score: null,
    dropRate: 2.3,
    acceptance: 94,
    iconUrl:
      "https://www.shareicon.net/data/128x128/2016/09/15/829473_man_512x512.png"
  },
  {
    name: "Adam Savage",
    score: 4.8,
    dropRate: 2.3,
    acceptance: 94,
    iconUrl:
      "https://www.shareicon.net/data/128x128/2016/09/15/829473_man_512x512.png"
  },
  {
    name: "Derek Black",
    score: 3.8,
    dropRate: 2.3,
    acceptance: 37,
    iconUrl: "https://www.shareicon.net/data/128x128/2016/09/15/829473_man_512x512.png"
  },
  {
    name: "Erika White",
    score: 3.6,
    dropRate: 4.9,
    acceptance: 59,
    iconUrl:
      "https://www.shareicon.net/data/128x128/2016/09/15/829473_man_512x512.png"
  },
  {
    name: "Jimmy John",
    score:  3.6,
    dropRate: 4.9,
    acceptance: 94,
    iconUrl: "https://www.shareicon.net/data/128x128/2016/09/15/829473_man_512x512.png"
  },
  {
    name: "Joe Roddy",
    score: 3.4,
    dropRate: 11.1,
    acceptance: 37,
    iconUrl: "https://www.shareicon.net/data/128x128/2016/09/15/829473_man_512x512.png"
  },
  {
    name: "Ericka Johannesburg",
    score: 3.4,
    dropRate: 11.1,
    acceptance: 59,
    iconUrl:
      "https://www.shareicon.net/data/128x128/2016/09/15/829473_man_512x512.png"
  },
  {
    name: "Tim Thomas",
    score: 4.4,
    dropRate: 11.1,
    acceptance: 64,
    iconUrl: "https://www.shareicon.net/data/128x128/2016/09/15/829473_man_512x512.png"
  },
  {
    name: "John Davis",
    score: 4.7,
    dropRate: 12.1,
    acceptance: 86,
    iconUrl:
      "https://www.shareicon.net/data/128x128/2016/09/15/829473_man_512x512.png"
  },
  {
    name: "Tina Turner",
    score: 4.2,
    dropRate:1.2,
    acceptance: 91,
    iconUrl:
      "https://www.shareicon.net/data/128x128/2016/09/15/829473_man_512x512.png"
  },

  {
    name: "Lauren Leonard",
    score: 3.0,
    dropRate:2.6,
    acceptance: 70,
    iconUrl:
      "https://www.shareicon.net/data/128x128/2016/09/15/829473_man_512x512.png-"
  }
];