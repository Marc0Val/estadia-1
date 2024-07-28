import React, { useState } from "react";
import { Button } from "reactstrap";
import {
  CardCertificacion,
  CertificationModal,
} from "./Cards/CardCertificacion";
import FilterForm from "./Forms/FilterForm";
import ModalButton from "./Buttons/ModalButton";
import AddCertificationForm from "./Forms/AddCertificationForm";

const Dashboard = () => {
  const [filters, setFilters] = useState({
    name: "",
    topic: "",
    location: "",
    space: "",
    department: "",
    startDate: null,
    endDate: null,
    people: "",
    budget: "",
  });

  const [certifications, setCertifications] = useState([
    // Datos de ejemplo
    {
      id: 1,
      name: "1",
      date: new Date(),
      topic: "Prueba",
      location: "Madrid",
      space: "Sala A",
      department: "Recursos Humanos",
      startDate: new Date("2023-01-01"),
      endDate: new Date("2023-01-02"),
      people: 25,
      budget: 1000,
    },
  ]);

  const [filteredCertifications, setFilteredCertifications] =
    useState(certifications);
  const [selectedCertification, setSelectedCertification] = useState(null);
  const [isFilterMenuVisible, setIsFilterMenuVisible] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const handleDateChange = (name, date) => {
    setFilters({ ...filters, [name]: date });
  };

  const handleFilter = () => {
    let filtered = certifications.filter((cert) => {
      return (
        (filters.name === "" ||
          cert.name.toLowerCase().includes(filters.name.toLowerCase())) &&
        (filters.topic === "" ||
          cert.topic.toLowerCase().includes(filters.topic.toLowerCase())) &&
        (filters.location === "" ||
          cert.location
            .toLowerCase()
            .includes(filters.location.toLowerCase())) &&
        (filters.space === "" ||
          cert.space.toLowerCase().includes(filters.space.toLowerCase())) &&
        (filters.department === "" ||
          cert.department
            .toLowerCase()
            .includes(filters.department.toLowerCase())) &&
        (filters.startDate === null || cert.startDate >= filters.startDate) &&
        (filters.endDate === null || cert.endDate <= filters.endDate) &&
        (filters.people === "" || cert.people.toString() === filters.people) &&
        (filters.budget === "" || cert.budget.toString() === filters.budget)
      );
    });
    setFilteredCertifications(filtered);
  };

  const toggleModal = (certification) => {
    setSelectedCertification(certification);
  };

  const toggleFilterMenu = () => {
    setIsFilterMenuVisible(!isFilterMenuVisible);
  };

  const toggleFormModal = () => {
    setModalOpen(!modalOpen);
  };

  const addCertification = (newCert) => {
    setCertifications([
      ...certifications,
      { id: certifications.length + 1, ...newCert },
    ]);
    setFilteredCertifications([
      ...certifications,
      { id: certifications.length + 1, ...newCert },
    ]);
  };
  return (
    <div className="content">
      <ModalButton icon="fas fa-plus" modalContent={<AddCertificationForm />} />

      <Button onClick={toggleFilterMenu} className="toggle-filter-btn">
        {isFilterMenuVisible ? "Ocultar Filtros" : "Mostrar Filtros"}
      </Button>
      <div className={`filter-menu ${isFilterMenuVisible ? "visible" : ""}`}>
        <FilterForm
          filters={filters}
          handleFilterChange={handleFilterChange}
          handleDateChange={handleDateChange}
          handleFilter={handleFilter}
        />
      </div>

      <div className="certifications">
        {filteredCertifications.map((cert) => (
          <CardCertificacion
            key={cert.id}
            cert={cert}
            toggleModal={toggleModal}
          />
        ))}
      </div>

      {selectedCertification && (
        <CertificationModal
          certification={selectedCertification}
          toggleModal={toggleModal}
        />
      )}
    </div>
  );
};

export default Dashboard;
