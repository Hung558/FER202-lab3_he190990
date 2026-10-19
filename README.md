# Lab 3 – HE190990 (FER202)

Project React (Create React App) dùng React Router, React Bootstrap, Axios và json-server làm REST API giả lập.

## Công nghệ

- React 18, react-scripts 5
- react-router-dom 6
- react-bootstrap + bootstrap 5, react-bootstrap-icons
- axios
- json-server

## Cấu trúc

```
public/                 # index.html, icon, manifest
src/
  index.js              # entry, import Bootstrap CSS
  App.js                # BrowserRouter + Routes
  components/
    FileMau.js          # component mẫu
```

## Chạy project

```bash
npm install
npm start               # http://localhost:3000
```

Chạy json-server (cần tạo file `db.json` ở thư mục gốc):

```bash
npx json-server db.json --port 9999
```

## Scripts

| Lệnh            | Mô tả                       |
|-----------------|-----------------------------|
| `npm start`     | Chạy dev server             |
| `npm run build` | Build production vào `build/` |
| `npm test`      | Chạy test                   |
