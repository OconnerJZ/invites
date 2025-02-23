import { Grid } from "@mui/material";
import { Form, Input } from "antd";

const regexPhone = /^\d+$/;

const FormGuest = () => {
  return (
    <Grid container spacing={1}>
        <Grid item xs={12} sm={12} md={6}>
          <Form.Item
            label="Invitado"
            name="name"
            rules={[
              {
                required: true,
                message: "Porfavor ingrese el nombre del invitado",
              },
            ]}
          >
            <Input size="large" />
          </Form.Item>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <Form.Item
            label="Familia"
            name="family"
            rules={[
              {
                required: true,
                message: "Porfavor ingrese la familia del invitado",
              },
            ]}
          >
            <Input size="large" />
          </Form.Item>
        </Grid>
        <Grid item xs={12} sm={4} md={6}>
          <Form.Item
            label="Télefono"
            name="phone"
            rules={[
              {
                required: true,
                message: "Porfavor ingrese la familia del invitado",
              },
              {
                pattern: regexPhone, // Utiliza la expresión regular definida
                message: 'Por favor ingresa solo números (no se aceptan espacios)',
              },
            ]}
          >
            <Input size="large" />
          </Form.Item>
        </Grid>
        <Grid item xs={6} sm={4} md={3}>
          <Form.Item
            label="No. de mesa"
            name="no_table"
            rules={[
              {
                required: true,
                message: "Porfavor ingrese la mesa del invitado",
              },
              {
                pattern: regexPhone, // Utiliza la expresión regular definida
                message: 'Por favor ingresa solo números (no se aceptan espacios)',
              },
            ]}
          >
            <Input size="large" />
          </Form.Item>
        </Grid>
        <Grid item xs={6} sm={4} md={3}>
          <Form.Item
            label="Invitados"
            name="guests"
            rules={[
              {
                required: true,
                message: "Porfavor ingrese el # de invitados",
              },
              {
                pattern: regexPhone, // Utiliza la expresión regular definida
                message: 'Por favor ingresa solo números (no se aceptan espacios)',
              },
            ]}
          >
            <Input size="large" />
          </Form.Item>
        </Grid>
      </Grid>
  );
};

export default FormGuest;
