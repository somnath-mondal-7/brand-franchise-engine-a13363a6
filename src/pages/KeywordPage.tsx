import { useParams } from 'react-router-dom';
import { KeywordPageTemplate } from '@/components/KeywordPageTemplate';
import { seoKeywords, serviceKeywords } from '@/data/locations';
import NotFound from './NotFound';

const KeywordPage = () => {
  const { keyword } = useParams();
  
  if (!keyword) {
    return <NotFound />;
  }

  // Convert slug back to keyword
  const decodedKeyword = keyword
    .replace(/-/g, ' ')
    .replace(/[^a-z0-9\s]/g, '');

  // Check if keyword exists in our data
  const allKeywords = [...seoKeywords, ...serviceKeywords];
  const foundKeyword = allKeywords.find(k => 
    k.toLowerCase().replace(/[^a-z0-9\s]/g, '') === decodedKeyword.toLowerCase()
  );

  if (!foundKeyword) {
    return <NotFound />;
  }

  // Determine service type based on keyword
  let service = "franchise lead generation";
  if (foundKeyword.includes("marketing")) {
    service = "franchise marketing";
  } else if (foundKeyword.includes("development")) {
    service = "franchise development";
  } else if (foundKeyword.includes("consulting")) {
    service = "franchise consulting";
  } else if (foundKeyword.includes("advertising")) {
    service = "franchise advertising";
  }

  return (
    <KeywordPageTemplate
      keyword={foundKeyword}
      service={service}
    />
  );
};

export default KeywordPage;