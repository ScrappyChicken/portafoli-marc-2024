import React, { useState } from "react";
import {
  Grid2,
  Dialog,
  DialogContent,
  DialogTitle,
  Card,
  CardActionArea,
  CardMedia,
  Typography,
} from "@mui/material";
import NotesFull from "../components/projectsComp/notesComps/NotesFull";
import BudgetFull2 from "../components/projectsComp/budgetComps/budgetFullState";
import CalculatorFull from "../components/projectsComp/calculatorComps/CalculatorFull";

function Projects() {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  //FUNCION PARA SELECCIONAR QUE PROYECTO ABRIR, TAMBIEN PARA 
  const handleOpen = (seleccion, title, description) => {
    setSelectedImage(seleccion)
    setTitle(title)
    setDescription(description)
    setOpen(true)
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedImage(null);
  };


  return (
    <div style={{ padding: "20px", backgroundColor: "#2c2c2c", color: "#fff", minHeight: "100vh" }}>
      <Typography variant="h4" style={{ textAlign: "center", marginBottom: "20px" }}>
        Proyectos 2024-25
      </Typography>
      <Grid2 container spacing={22}>

        {/*GRID PARA NOTAS*/}
          <Grid2 item xs={12} sm={6} md={3} key={"Notes"}>
            <Card style={{ backgroundColor: "#333" }}>
              <CardActionArea onClick={() => handleOpen(<NotesFull/>, "Notas", "Notas")}>
                <CardMedia
                  component="img"
                  height="200"
                  image={"/assets/img/notes.png"}
                  alt={"Notes"}
                  style={{
                    width: "500px", 
                    height: "300px", 
                    objectFit: "cover", 
                    margin: "auto", 
                  }}
                />
                <Typography
                  style={{ padding: "10px", color: "#80cbc4", textAlign: "center" }}
                  variant="subtitle1"
                >
                  {"NOTAS"}
                </Typography>
              </CardActionArea>
            </Card>
          </Grid2>
       {/*GRID PARA BUDGET*/}
       <Grid2 item xs={12} sm={6} md={3} key={"Budget"}>
            <Card style={{ backgroundColor: "#233" }}>
              <CardActionArea onClick={() => handleOpen(<BudgetFull2 />,  "Budget", "Budget")}>
                <CardMedia
                  component="img"
                  height="100"
                  image={"/assets/img/budget.png"}
                  alt={"Notes"}
                  style={{
                    width: "500px", 
                    height: "300px", 
                    objectFit: "cover", 
                    margin: "auto", 
                  }}
                />
                <Typography
                  style={{ padding: "10px", color: "#80cbc4", textAlign: "center" }}
                  variant="subtitle1"
                >
                  {"BUDGET"}
                </Typography>
              </CardActionArea>
            </Card>
          </Grid2>


       {/*GRID PARA CALCULADORA*/}
       <Grid2 item xs={12} sm={6} md={3} key={"Calculator"}>
            <Card style={{ backgroundColor: "#233" }}>
              <CardActionArea onClick={() => handleOpen(<CalculatorFull />,  "Calculadora", "Calculadora")}>
                <CardMedia
                  component="img"
                  height="100"
                  image={"/assets/img/calculadora.png"}
                  alt={"Notes"}
                  style={{
                    width: "500px", 
                    height: "300px", 
                    objectFit: "contain", 
                    margin: "auto", 
                  }}
                />
                <Typography
                  style={{ padding: "10px", color: "#80cbc4", textAlign: "center" }}
                  variant="subtitle1"
                >
                  {"CALCULADORA"}
                </Typography>
              </CardActionArea>
            </Card>
          </Grid2>
      </Grid2>

      {/*DIALOG VARIABLE*/}
      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        {selectedImage && (
          <>
            <DialogTitle style={{ backgroundColor: "#444", color: "#80cbc4" }}>
              {title}
            </DialogTitle>
            <DialogContent style={{ backgroundColor: "#333", color: "#fff" }}>
              {selectedImage}
              <Typography>{description}</Typography>
            </DialogContent>
          </>
        )}
      </Dialog>
      <div style={{ paddingTop: "400px", textAlign: "center" }}> Esta pagina es una compliacion de proyectos en los que he trabajado este año. Clickar sobre cualquiera de ellos los ejecutara  </div>
    </div>
  );
}

export default Projects;
