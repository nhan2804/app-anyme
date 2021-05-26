import React from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import styles from '../../styles/docu';
const docu = () => {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.headV}>
                <Text style={styles.Cate}>DANH MỤC TÀI LIỆU</Text>
                <View style={styles.headC}>
                <TouchableOpacity style={styles.itemCate}>
                    <Text style={styles.Tx}>
                        Cấu trúc dữ liệu
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.itemCate}>
                    <Text style={styles.Tx}>
                        Python nâng cao
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.itemCate}>
                    <Text style={styles.Tx}>
                       Quản lý mạng
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.itemCate}>
                    <Text style={styles.Tx}>
                        Lập trình web
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.itemCate}>
                    <Text style={styles.Tx}>
                        Lập trình ứng dụng
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.itemCate}>
                    <Text style={styles.Tx}>
                        Khác
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.itemCate}>
                    <Text style={styles.Tx}>
                        File linh tinh
                    </Text>
                </TouchableOpacity>
                </View>
                
            </View>
            {/* map docu */}
            <View style={styles.botItem}>
                <View style={styles.bHead}>
                    <View style={styles.imgV}>
                        <Image style={styles.img}

                        />
                    </View>
                    <Text style={styles.title}>
                        Lập trình nhúng với FPT
                    </Text>
                </View>
                <View style={styles.desc}>
                    <Text style={styles.Txdes}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidi
                    </Text>
                </View>
                <View style={styles.botb}>
                <TouchableOpacity style={styles.btnL}>
                    <Text style={styles.Txbtn}>
                        Xem chi tiết
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnR}>
                    <Text style={styles.Txbtn}>
                        Tải xuống
                    </Text>
                </TouchableOpacity>
                </View>
            </View>
            <View style={styles.botItem}>
                <View style={styles.bHead}>
                    <View style={styles.imgV}>
                        <Image style={styles.img}

                        />
                    </View>
                    <Text style={styles.title}>
                        Lập trình nhúng với FPT
                    </Text>
                </View>
                <View style={styles.desc}>
                    <Text style={styles.Txdes}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidi
                    </Text>
                </View>
                <View style={styles.botb}>
                <TouchableOpacity style={styles.btnL}>
                    <Text style={styles.Txbtn}>
                        Xem chi tiết
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnR}>
                    <Text style={styles.Txbtn}>
                        Tải xuống
                    </Text>
                </TouchableOpacity>
                </View>
            </View>
            <View style={styles.botItem}>
                <View style={styles.bHead}>
                    <View style={styles.imgV}>
                        <Image style={styles.img}

                        />
                    </View>
                    <Text style={styles.title}>
                        Lập trình nhúng với FPT
                    </Text>
                </View>
                <View style={styles.desc}>
                    <Text style={styles.Txdes}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidi
                    </Text>
                </View>
                <View style={styles.botb}>
                <TouchableOpacity style={styles.btnL}>
                    <Text style={styles.Txbtn}>
                        Xem chi tiết
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnR}>
                    <Text style={styles.Txbtn}>
                        Tải xuống
                    </Text>
                </TouchableOpacity>
                </View>
            </View>

        </ScrollView>
    );
}

export default docu;
