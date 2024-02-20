import { Descriptions } from "antd";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ShareIcon from "@mui/icons-material/Share";
import EditIcon from '@mui/icons-material/Edit';
import { IconButton } from "@mui/material";

export const ColumnsGuests = (onShare, onEdit) => [
  {
    title: "Nombre",
    dataIndex: "name",
    key: "name",
    responsive: ["md"],
  },
  {
    title: "Familia",
    dataIndex: "family",
    key: "family",
    responsive: ["md"],
  },
  {
    title: "Invitado",
    key: "invitado",
    responsive: ["xs"],
    width: 250,
    render: (_, row) => (
      <Descriptions title={row.name} size="small">
        <Descriptions.Item label="Familia">{row.family}</Descriptions.Item>
        <Descriptions.Item label="Mesa">{row.no_table}</Descriptions.Item>
        <Descriptions.Item label="Invitados">{row.guests}</Descriptions.Item>
        <Descriptions.Item label="Confirma">
          {row?.confirmation === 1 ? <CheckCircleIcon color="success" /> : ""}
        </Descriptions.Item>
      </Descriptions>
    ),
  },
  {
    title: "Telefono",
    dataIndex: "phone",
    key: "phone",
    responsive: ["md"],
  },
  {
    title: "Mesa",
    dataIndex: "no_table",
    key: "no_table",
    responsive: ["md"],
  },
  {
    title: "Invitados",
    dataIndex: "guests",
    key: "guests",
    responsive: ["md"],
  },
  {
    title: "Confirma",
    key: "confirmation",
    responsive: ["md"],
    align: "center",
    render: (_, row) =>
      row?.confirmation === 1 ? <CheckCircleIcon color="success" /> : "",
  },
  {
    title: "Compartir",
    key: "send",
    align: "center",
    render: (_, row) => (
      <IconButton onClick={() => onShare(row)}>
        <ShareIcon />
      </IconButton>
    ),
  },
  {
    title: "",
    key: "edit",
    align: "center",
    width: 50,
    render: (_, row) => (
      <IconButton onClick={() => onEdit(row)}>
        <EditIcon />
      </IconButton>
    ),
  },
];
