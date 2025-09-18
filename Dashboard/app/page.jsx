"use client";
import { useState } from "react";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid,
  ScatterChart, Scatter,
  RadarChart, Radar,
  PolarGrid, PolarAngleAxis, PolarRadiusAxis
} from "recharts";
import dashboardData from "../dashboard_data.json";
import styles from "./page.module.css";

export default function Dashboard() {
  // States
  const [search, setSearch] = useState("");
  const [radarSearch, setRadarSearch] = useState("");
  const [selectedStudent, setSelectedStudent] = useState(0);

  // Filter students for table
  const filteredStudents = dashboardData.students.filter((s) =>
    s.name.toLowerCase().includes(search.toLowerCase())
  );

  // Filter students for radar dropdown
  const radarFilteredStudents = dashboardData.students.filter((s) =>
    s.name.toLowerCase().includes(radarSearch.toLowerCase())
  );

  // Bar chart data (static)
  const barData = Object.entries(dashboardData.bar_chart).map(([skill, value]) => ({
    skill,
    value
  }));

  // Scatter chart data (static)
  const scatterData = dashboardData.students.map((s) => ({
    name: s.name,
    attention: s.attention,
    performance: s.assessment_score
  }));

  // Radar chart data (dynamic)
  const radarData =
    selectedStudent < dashboardData.students.length &&
    dashboardData.students[selectedStudent].skills
      ? Object.entries(dashboardData.students[selectedStudent].skills).map(([skill, value]) => ({ skill, value }))
      : [];

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>📊 Student Dashboard</h1>

      {/* Overview */}
      <div className={styles.overview}>
        <div className={styles.card}>Avg Score: {dashboardData.overview.avg_score.toFixed(1)}</div>
        <div className={styles.card}>Top Skill: {dashboardData.overview.top_skill}</div>
        <div className={styles.card}>Avg Focus: {dashboardData.overview.avg_focus.toFixed(1)}</div>
      </div>

      {/* Charts Section */}
      <div className={styles.charts}>
        {/* Bar Chart */}
        <div className={styles.chartBox}>
          <h3>Skill Bar Chart</h3>
          <BarChart width={350} height={250} data={barData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="skill" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#4e79a7" />
          </BarChart>
        </div>

        {/* Scatter Chart */}
        <div className={styles.chartBox}>
          <h3>Attention vs Performance</h3>
          <ScatterChart width={350} height={250}>
            <CartesianGrid />
            <XAxis type="number" dataKey="attention" name="Attention" />
            <YAxis type="number" dataKey="performance" name="Performance" />
            <Tooltip cursor={{ strokeDasharray: "3 3" }} />
            <Scatter data={scatterData} fill="#f28e2b" />
          </ScatterChart>
        </div>

        {/* Radar Chart */}
        <div className={styles.chartBox}>
          <h3>Radar Chart (Student Profile)</h3>

          {/* Searchable dropdown */}
          <input
            type="text"
            placeholder="Search student..."
            value={radarSearch}
            onChange={(e) => setRadarSearch(e.target.value)}
            style={{ marginBottom: "5px", width: "100%", padding: "5px" }}
          />

          <select
            value={selectedStudent}
            onChange={(e) => setSelectedStudent(Number(e.target.value))}
            style={{ width: "100%", padding: "5px", marginBottom: "10px" }}
          >
            {radarFilteredStudents.map((s) => {
              const idx = dashboardData.students.indexOf(s);
              return (
                <option key={idx} value={idx}>
                  {s.name}
                </option>
              );
            })}
          </select>

          <RadarChart cx={175} cy={125} outerRadius={90} width={350} height={250} data={radarData}>
            <PolarGrid />
            <PolarAngleAxis dataKey="skill" />
            <PolarRadiusAxis />
            <Radar dataKey="value" stroke="#59a14f" fill="#59a14f" fillOpacity={0.6} />
          </RadarChart>
        </div>
      </div>

      {/* Student Table */}
      <div className={styles.tableSection}>
        <h2>Student List</h2>
        <input
          type="text"
          className={styles.search}
          placeholder="Search student..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Assessment Score</th>
              <th>Attention</th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.slice(0, 3).map((s, i) => (
              <tr key={`first-${i}`}>
                <td>{s.name}</td>
                <td>{s.assessment_score}</td>
                <td>{s.attention}</td>
              </tr>
            ))}
            {filteredStudents.length > 5 && (
              <tr>
                <td colSpan="3" style={{ textAlign: "center" }}>...</td>
              </tr>
            )}
            {filteredStudents.slice(-2).map((s, i) => (
              <tr key={`last-${i}`}>
                <td>{s.name}</td>
                <td>{s.assessment_score}</td>
                <td>{s.attention}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Insights */}
      <div className={styles.insights}>
        <h2>Key Insights</h2>
        <ul>
          <li>Top skill correlating with performance: {dashboardData.overview.top_skill}</li>
          <li>Students with higher attention tend to score better.</li>
          <li>Average focus level: {dashboardData.overview.avg_focus.toFixed(1)}</li>
        </ul>
      </div>
    </div>
  );
}
