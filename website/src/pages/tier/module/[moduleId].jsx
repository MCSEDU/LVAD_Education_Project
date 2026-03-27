import React from 'react';
import { useParams } from 'react-router-dom';
import ModulePlayer from '../../../components/ModulePlayer';
import QuizEngine from '../../../components/QuizEngine';

const ModulePage = () => {
  const { moduleId } = useParams();
  // Load module content
  const module = {}; // Placeholder
  const quiz = []; // Placeholder

  return (
    <div>
      <ModulePlayer module={module} />
      <QuizEngine questions={quiz} />
    </div>
  );
};

export default ModulePage;