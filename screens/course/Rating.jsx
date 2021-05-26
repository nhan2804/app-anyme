import React, { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { Rating as Rate, LinearProgress, Avatar } from "react-native-elements";
import useRate from "../../common/hooks/useRate";
import styles from "../../styles/rating";
import ItemRating from "./rating/ItemRating";
import NewRating from "./rating/NewRating";

const Rating = ({ id }) => {
  const { data } = useRate(id);
  console.log(data?.count);
  const [editRate, seteditRate] = useState(false);
  return (
    <ScrollView style={styles.container}>
      <View style={styles.headD}>
        <View style={styles.hL}>
          <Text style={styles.value}>{data?.avg}</Text>
          <Rate
            type="star"
            style={{
              marginBottom: 5,
            }}
            imageSize={25}
            readonly
            startingValue={data?.avg}
          />
          <Text style={styles.sl}>{data?.rates.length} đánh giá</Text>
        </View>
        <View style={styles.hR}>
          <View style={styles.item}>
            <Text style={styles.num}>5</Text>
            <LinearProgress
              color="primary"
              variant="determinate"
              value={data?.count["5"]?.total / data?.rates.length}
              style={styles.prog}
            />
          </View>
          <View style={styles.item}>
            <Text style={styles.num}>4</Text>
            <LinearProgress
              color="primary"
              variant="determinate"
              value={data?.count["4"]?.total / data?.rates.length}
              style={styles.prog}
            />
          </View>
          <View style={styles.item}>
            <Text style={styles.num}>3</Text>
            <LinearProgress
              color="primary"
              variant="determinate"
              value={data?.count["3"]?.total / data?.rates.length}
              style={styles.prog}
            />
          </View>
          <View style={styles.item}>
            <Text style={styles.num}>2</Text>
            <LinearProgress
              color="primary"
              variant="determinate"
              value={data?.count["2"]?.total / data?.rates.length}
              style={styles.prog}
            />
          </View>
          <View style={styles.item}>
            <Text style={styles.num}>1</Text>
            <LinearProgress
              color="primary"
              variant="determinate"
              value={data?.count["1"]?.total / data?.rates.length}
              style={styles.prog}
            />
          </View>
        </View>
      </View>
      {!data?.rated && <NewRating rate={data?.rated} id={id} />}
      {data?.rated && editRate && <NewRating rate={data?.rated} id={id} />}
      {data?.rated && (
        <ItemRating idUser={data?.rated?.user?.id} rate={data?.rated} />
      )}
      {data?.rates?.map((e, i) => {
        return <ItemRating rate={e} />;
      })}
    </ScrollView>
  );
};

export default Rating;
