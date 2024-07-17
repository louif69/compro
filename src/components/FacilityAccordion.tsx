"use client";

import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";

export default function FacilityAccordion() {
  return (
    <Accordion color="#1521a4" allowToggle>
      <AccordionItem>
        <AccordionButton>
          <Box fontWeight="semibold" as="span" flex="1" textAlign="left">
            Kamar yang Nyaman
          </Box>
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel pb={4}>
          Nikmati tidur malam yang nyenyak di kamar kami yang dilengkapi dengan
          fasilitas modern. Setiap kamar dirancang dengan cermat untuk
          memberikan kenyamanan maksimal.
          <UnorderedList>
            <ListItem>
              <Text fontWeight="semibold">AC:</Text> Jaga suhu kamar Anda tetap
              nyaman dengan pendingin udara berkualitas tinggi.
            </ListItem>
            <ListItem>
              <Text fontWeight="semibold">Wi-Fi Gratis:</Text> Tetap terhubung
              dengan internet berkecepatan tinggi yang tersedia di seluruh
              properti.
            </ListItem>
            <ListItem>
              <Text fontWeight="semibold">Kamar Mandi Pribadi:</Text> Nikmati
              privasi dan kenyamanan dengan kamar mandi pribadi yang bersih dan
              lengkap dengan perlengkapan mandi.
            </ListItem>
          </UnorderedList>
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem>
        <AccordionButton>
          <Box fontWeight="semibold" as="span" flex="1" textAlign="left">
            Lokasi Strategis:
          </Box>
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel pb={4}>
          Terletak dekat dengan atraksi wisata populer, pusat perbelanjaan, dan
          tempat makan, homestay kami memberikan akses mudah ke tempat-tempat
          terbaik di Surakarta. Hanya beberapa langkah dari tempat-tempat ikonik
          seperti Keraton Surakarta, Pasar Klewer, dan Taman Balekambang.
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionButton>
          <Box fontWeight="semibold" as="span" flex="1" textAlign="left">
            Harga Terjangkau:
          </Box>
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel pb={4}>
          Kami menawarkan harga kompetitif tanpa mengorbankan kualitas. Periksa
          penawaran khusus kami dan pesan langsung untuk harga terbaik. Nikmati
          penginapan yang nyaman dan hemat di BenSare Homestay.
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
}
