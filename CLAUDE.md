# Claude Memory

## Attio API Configuration

- **Token stored in**: `.attiotoken`
- **Token value**: ``

## Attio API Search Syntax

### Correct Filter Syntax for Text Search
```json
{
  "filter": {
    "name": {
      "$contains": "search_term"
    }
  }
}
```

### Available Operators
- `$eq` - Exact equality match
- `$contains` - Case-insensitive partial match for text
- `$not_empty` - Check if field has any value
- `$in` - Check if value is in a set

### API Endpoints
- **Query People**: `POST https://api.attio.com/v2/objects/people/records/query`
- **Query Companies**: `POST https://api.attio.com/v2/objects/companies/records/query`

### Example Working Query
```bash
curl -X POST "https://api.attio.com/v2/objects/people/records/query" \
  -H "Authorization: Bearer [token]" \
  -H "Content-Type: application/json" \
  -d '{"filter": {"name": {"$contains": "Pieter"}}}'
```

## Updating Contacts with Transcript Information

### Complete Process for Transcript Updates

1. **Search for Contact in People Database**
```bash
curl -X POST "https://api.attio.com/v2/objects/people/records/query" \
  -H "Authorization: Bearer [token]" \
  -H "Content-Type: application/json" \
  -d '{"filter": {"name": {"$contains": "search_name"}}}'
```

2. **Update Person Record Fields**
```bash
curl -X PATCH "https://api.attio.com/v2/objects/people/records/[record_id]" \
  -H "Authorization: Bearer [token]" \
  -H "Content-Type: application/json" \
  -d '{
    "data": {
      "values": {
        "description": [{"value": "Enhanced description with call insights"}],
        "short_bio": [{"value": "Concise professional summary"}],
        "lgm_audience_2": [{"value": "Segmentation tags"]}
      }
    }
  }'
```

3. **Find CISOs List and Check if Contact is Member**
```bash
# Get all lists
curl -X GET "https://api.attio.com/v2/lists" \
  -H "Authorization: Bearer [token]"

# Get CISOs list entries  
curl -X POST "https://api.attio.com/v2/lists/recruiting/entries/query" \
  -H "Authorization: Bearer [token]" \
  -H "Content-Type: application/json" \
  -d '{}'
```

4. **Update CISOs List Entry with CISO-Specific Fields**
```bash
curl -X PATCH "https://api.attio.com/v2/lists/recruiting/entries/[entry_id]" \
  -H "Authorization: Bearer [token]" \
  -H "Content-Type: application/json" \
  -d '{
    "data": {
      "entry_values": {
        "date_of_conversation": [{"value": "YYYY-MM-DD"}],
        "contact_name": [{"value": "Full Name"}],
        "company": [{"value": "Company Name"}],
        "role": [{"value": "Job Title"}],
        "insider_risk_program_maturity": [{"value": "Maturity level description"}],
        "insider_risk_owner_s": [{"value": "Program owner"}],
        "is_insider_risk_a_top_priority": [{"value": true/false}],
        "current_program_objectives": [{"value": "Current objectives"}],
        "current_insider_risk_tools": [{"value": "Tools in use"}],
        "feedback_on_current_tools": [{"value": "Tool feedback"}],
        "have_they_used_ueba": [{"value": true/false}],
        "ueba_tool_used": [{"value": "UEBA tool name"}],
        "ueba_satisfaction": [{"value": "Satisfaction level"}],
        "tools_they_wish_worked_better": [{"value": "Tool improvement needs"}],
        "top_insider_risk_concerns": [{"value": "Primary concerns"}],
        "do_they_see_dlp_as_sufficient": [{"value": true/false}],
        "risk_detection_priority_areas": [{"value": "Priority areas"}],
        "awareness_approach": [{"value": "Awareness strategy"}],
        "privacy_sensitivity_level": [{"value": "Privacy requirements"}],
        "legal_hr_approval_required_for_deployment": [{"value": true/false}],
        "dpo_privacy_approval_blocking_risk": [{"value": true/false}],
        "data_anonymization_requirement": [{"value": true/false}],
        "budget_holder_s": [{"value": "Budget decision maker"}],
        "budget_status": [{"value": "Budget situation"}],
        "preferred_deployment_method": [{"value": "Deployment preference"}],
        "decision_timeline": [{"value": "Decision process timeline"}],
        "next_step": [{"value": "Follow-up actions"}]
      }
    }
  }'
```

### Key CISOs List Attributes for Transcript Updates
- **Contact Info**: `date_of_conversation`, `contact_name`, `company`, `role`
- **Program Assessment**: `insider_risk_program_maturity`, `insider_risk_owner_s`, `is_insider_risk_a_top_priority`
- **Current State**: `current_program_objectives`, `current_insider_risk_tools`, `feedback_on_current_tools`
- **UEBA Experience**: `have_they_used_ueba`, `ueba_tool_used`, `ueba_satisfaction`
- **Pain Points**: `tools_they_wish_worked_better`, `top_insider_risk_concerns`
- **Requirements**: `privacy_sensitivity_level`, `legal_hr_approval_required_for_deployment`
- **Decision Process**: `budget_holder_s`, `budget_status`, `decision_timeline`, `next_step`

### Important Notes
- Use `PATCH` for updates, not `PUT`
- Person records use `"values"` structure
- List entries use `"entry_values"` structure
- Checkbox fields take boolean values (`true`/`false`)
- Text fields take string values
- Always include `[{"value": "content"}]` array format