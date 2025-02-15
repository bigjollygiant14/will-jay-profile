const RESUME_GRAPHQL_FIELDS = `
  sys {
    id
  }
  companyName
  jobTitle
  description {
    json
  }
  descriptionExtended {
    json
  }
  dateStarted
  dateEnded
  contentfulMetadata {
    tags {
        id
        name
    }
  }
`;

async function fetchGraphQL(query:string, preview = false) {
  return fetch(
   `https://graphql.contentful.com/content/v1/spaces/${process.env.CTF_SPACE_ID}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${
          preview
            ? process.env.CTF_PREVIEW_ACCESS_TOKEN
            : process.env.CTF_ACCESS_TOKEN
        }`,
      },
      body: JSON.stringify({ query }),
      // Associate all fetches for articles with an "articles" cache tag so content can
      // be revalidated or updated from Contentful on publish
      // next: { tags: ["articles"] },
    }
  ).then((response) => response.json());
}

interface FetchResponse {
  data: {
    resumeCollection: {
      items: []
    }
  }
}
function extractResumeEntries(fetchResponse:FetchResponse) {
  return fetchResponse?.data?.resumeCollection?.items;
}

export async function getAllResumeItems(
  // By default this function will return published content but will provide an option to
  // return draft content for reviewing articles before they are live
  isDraftMode = false
) {
  const resumeItems = await fetchGraphQL(
    `query {
        resumeCollection(order: dateStarted_DESC, preview: ${
      isDraftMode ? "true" : "false"
    }) {
          items {
            ${RESUME_GRAPHQL_FIELDS}
          }
        }
      }`,
    isDraftMode
  );
  return extractResumeEntries(resumeItems);
}

/* Get single item
export async function getResumeItem(
  slug:string,
  isDraftMode:boolean = false
) {
  const resumeItem = await fetchGraphQL(
    `query {
        resumeCollection(where:{slug: "${slug}"}, limit: 1, preview: ${
      isDraftMode ? "true" : "false"
    }) {
          items {
            ${RESUME_GRAPHQL_FIELDS}
          }
        }
      }`,
    isDraftMode
  );
  return extractResumeEntries(resumeItem)[0];
} */