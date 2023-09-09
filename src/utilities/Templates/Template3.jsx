import React from "react";

const Template3 = () => {
  return (
    <div>
      <Paper
        sx={{
          width: "100vh",
          height: "113vh",
        }}
        className="mx-auto"
        maxWidth={false}
      >
        <Container>
          <div className="grid grid-cols-2">
            <div className="bg-red-400 h-[500px] w-full">hi</div>
            <div></div>
          </div>
        </Container>
      </Paper>
    </div>
  );
};

export default Template3;
