import React from 'react';
import { useRouter } from 'next/router';
import ModulePlayer from '../../../components/ModulePlayer';
import QuizEngine from '../../../components/QuizEngine';

const ModulePage = () => {
  const router = useRouter();
  const { moduleId } = router.query;

  // Load module content
  const module = {}; // Placeholder
  const quiz = []; // Placeholder

  if (!moduleId) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <ModulePlayer module={module} />
      <QuizEngine questions={quiz} />
    </div>
  );
};

export default ModulePage;