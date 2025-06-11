import { FC } from 'react';

import { Editor } from './editor';
import { Toolbar } from './toolbar';

interface DocumentIdPageProps {
  params: Promise<{ documentId: string }>;
}

const DocmentIdPage: FC<DocumentIdPageProps> = async ({ params }) => {
  const { documentId } = await params;

  console.log(documentId);

  return (
    <div className="min-h-screen bg-[#FAFBFD]">
      <Toolbar />
      <Editor />
    </div>
  );
};

export default DocmentIdPage;
