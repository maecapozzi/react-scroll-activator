import React from "react"

const StickyElement = ({ isSticky }) => {
  if (isSticky === "isActivated") {
    return (
      <div style={{ height: "5000px" }}>
        <div
          style={{
            backgroundColor: "red",
            height: "100px",
            position: "fixed",
            width: "95%"
          }}
        >
          <h1
            style={{
              color: "white"
            }}
          >
            I'm Sticky
          </h1>
        </div>
      </div>
    )
  } else {
    return (
      <div style={{ height: "5000px" }}>
        <div style={{ backgroundColor: "red", height: "100px" }}>
          <h1
            style={{
              marginTop: "200px",
              color: "white"
            }}
          >
            I'm Not Sticky
          </h1>
        </div>
      </div>
    )
  }
}

export default StickyElement
