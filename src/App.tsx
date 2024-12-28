import { Routes, Route } from 'react-router-dom';
    import { AuthPage } from './pages/Auth';
    import { Dashboard } from './pages/Dashboard';
    import { Cases } from './pages/Cases';
    import { Documents } from './pages/Documents';
    import { Persons } from './pages/Persons';
    import { Timeline } from './pages/Timeline';

    function App() {
      return (
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/cases" element={<Cases />} />
          <Route path="/documents" element={<Documents />} />
          <Route path="/persons" element={<Persons />} />
          <Route path="/timeline" element={<Timeline />} />
        </Routes>
      );
    }

    export default App;
