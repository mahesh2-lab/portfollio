import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ExpandableCard = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => setIsExpanded(!isExpanded);

  return (
    <div style={{ position: "relative", height: "100vh" }}>
      <AnimatePresence>
        {!isExpanded && (
          <motion.div
            className="card-container"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            onClick={toggleExpand}
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "300px",
              height: "200px",
              borderRadius: "15px",
              backgroundColor: "#f8f9fa",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              padding: "20px",
              cursor: "pointer",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
            }}
          >
            <h2 style={{ margin: 0, color: "#333" }}>Compact Card</h2>
            <p style={{ marginTop: "10px", color: "#555" }}>
              Click to see more information.
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            className="expanded-container"
            initial={{ opacity: 0, top: "50%", left: "50%", width: "300px", height: "200px", transform: "translate(-50%, -50%)" }}
            animate={{
              opacity: 1,
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              transform: "translate(0, 0)",
            }}
            exit={{ opacity: 0, top: "50%", left: "50%", width: "300px", height: "200px", transform: "translate(-50%, -50%)" }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            style={{
              position: "absolute",
              backgroundColor: "#ffffff",
              zIndex: 100,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              padding: "20px",
              boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.3)",
              overflow: "hidden",
            }}
            onClick={toggleExpand}
          >
            <h1 style={{ margin: "0 0 20px", color: "#333" }}>
              Expanded Information
            </h1>
            <p style={{ color: "#555" }}>
              Here is more detailed information about the card. Click anywhere
              to close.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ExpandableCard;
