import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";
import { PDFViewer } from "@react-pdf/renderer";
import avatar from "../../assets/avatar.jpg";

const Template4 = () => {
  // Create styles
  const styles = StyleSheet.create({
    page: {
      flexDirection: "row",
      backgroundColor: "#E4E4E4",
    },
    section: {
      margin: 10,
      padding: 10,
      flexGrow: 1,
    },
    image: {
      height: 100,
      width: 100,
      borderRadius: 50,
    },
  });

  return (
    <div>
      <PDFViewer className="h-[700px] w-[550px]" showToolbar={false}>
        <Document>
          <Page size="A4" style={styles.page}>
            <View style={styles.section}>
              <Image src={avatar} style={styles.image} />
              <Text>1st Section</Text>
            </View>
            <View style={styles.section}>
              <Text>Section #2</Text>
            </View>
          </Page>
          {/* 2nd page show */}
          <Page size="A4" style={styles.page}>
            <View style={styles.section}>
              <Text>Section #1</Text>
            </View>
            <View style={styles.section}>
              <Text>Section #2</Text>
            </View>
          </Page>
        </Document>
      </PDFViewer>
    </div>
  );
};

export default Template4;
