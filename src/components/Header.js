import React from "react";
import { Link } from "react-router-dom";
import { Flex, Heading } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { ToggleThemeIcon } from "./ToggleThemeIcon";

export const Header = () => {
  return (
    <motion.div
      initial={{ y: -250 }}
      animate={{ y: 0 }}
      transition={{ delay: 0.2, type: "spring", stiffness: 150 }}
    >
      <Flex
        color="dark-gray"
        p={3}
        mt={2}
        justifyContent="space-between"
        alignItems="flex-end"
        borderWidth=" 0 0.1px 0.1px 0.1px"
        borderRadius="30px"
        maxW="90%"
        h="8%"
        mx="auto"
      >
        <Link to="/">
          <Heading as="h4" color="teal.500">
            <i>`<nwachiii  />`</i>
          </Heading>
              </Link>
              <ToggleThemeIcon />
      </Flex>
    </motion.div>
  );
};
