import React from 'react';
import { PDFViewer, Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import { PDFDownloadLink } from '@react-pdf/renderer';
// Define the styles for the PDF document
const styles = StyleSheet.create({
  page: {
    fontFamily: 'Helvetica',
    fontSize: 12,
    padding: 20,
  },
  section: {
    marginBottom: 10,
  },
});

const MyDoc = ({ reservation }) => {
  // Destructure the reservation data
  const {
    numRes,
    dateRes,
    prixTotal,
    place,
    confirmerResevation,
    client,
    vol,
  } = reservation;

  // Render the PDF document
  return (
    <PDFViewer width="100%" height={800}>
      <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.section}>
            <Text>Reservation Number: {numRes}</Text>
            <Text>Date: {dateRes}</Text>
            <Text>Total Price: {prixTotal}</Text>
            <Text>Confirmation: {confirmerResevation}</Text>
          </View>

          <View style={styles.section}>
            <Text>Client Information</Text>
            <Text>Name: {client.nom} {client.prenom}</Text>
            <Text>Email: {client.email}</Text>
            <Text>Phone: {client.tel}</Text>
          </View>

          <View style={styles.section}>
            <Text>Flight Information</Text>
            <Text>Flight Code: {vol.codeVol}</Text>
            <Text>Departure: {vol.aeroportDepart.nom}</Text>
            <Text>Destination: {vol.aeroportDestination.nom}</Text>
            <Text>Status: {vol.status}</Text>
          </View>

          <View style={styles.section}>
            <Text>Seat Information</Text>
            <Text>Seat Number: {place.numplace}</Text>
            <Text>Seat Type: {place.siege.type}</Text>
            <Text>Capacity: {place.siege.capacite}</Text>
          </View>

          <View style={styles.section}>
            <Text>Airline Information</Text>
            <Text>Airline: {vol.avionVol.compagnie.nom}</Text>
            <Text>Address: {vol.avionVol.compagnie.adresse}</Text>
            <Text>Phone: {vol.avionVol.compagnie.tel}</Text>
          </View>

          {/* Add more ticket details here */}
        </Page>
      </Document>
    </PDFViewer>
  );
};

function ReservationTicket({reservation}) {
    return (
      <div className="App">
        <PDFDownloadLink document={<MyDoc reservation={reservation}/>} fileName="somename.pdf">
        {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download now!')}
      </PDFDownloadLink>
      </div>
    );
  }

export default ReservationTicket;