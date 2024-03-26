import GeneralContent from "@Components/layout/GeneralContent";
import useGuests from "@Hooks/invite/useGuests";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
} from "@mui/material";
import { Form, Table } from "antd";
import CachedIcon from "@mui/icons-material/Cached";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import FormGuest from "./FormGuest";

const Guests = () => {
  const {
    guests,
    columns,
    refresh,
    isLoading = false,
    modalGuest,
    formGuest,
    contextHolder,
    row,
  } = useGuests();
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <GeneralContent>
      {contextHolder}
      <Box sx={{ padding: "20px" }}>
        <Table
          loading={isLoading}
          dataSource={guests}
          columns={columns}
          size="small"
          pagination={false}
          title={() => (
            <div style={{ textAlign: "right" }}>
              <IconButton onClick={modalGuest.openGuest}>
                <PersonAddIcon />
              </IconButton>
              <IconButton onClick={refresh}>
                <CachedIcon />
              </IconButton>
            </div>
          )}
        />
      </Box>
      <Dialog
        fullScreen={fullScreen}
        fullWidth
        open={modalGuest.open}
        onClose={modalGuest.closeGuest}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          Agrega a un nuevo invitado
        </DialogTitle>
        <Form
          name="basic"
          layout="vertical"
          initialValues={row}
          onFinish={formGuest.onFinish}
          onFinishFailed={formGuest.onFinishFailed}
          autoComplete="off"
        >
          <DialogContent>
            <FormGuest />
          </DialogContent>
          <DialogActions>
            <Button onClick={modalGuest.closeGuest} variant="outlined" >Cancelar</Button>
            <Button type="submit" autoFocus variant="contained">
              {!row?.id ? "Agregar" : "Editar"}
            </Button>
          </DialogActions>
        </Form>
      </Dialog>
    </GeneralContent>
  );
};

export default Guests;
